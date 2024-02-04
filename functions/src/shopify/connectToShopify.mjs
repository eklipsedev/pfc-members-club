import functions from 'firebase-functions';
import Multipassify from 'multipassify';

const connectToShopify = functions.https.onCall(async (data, context) => {
  // Check if the request is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User not authenticated');
  }

  try {
    const {
      shopify: { apikey },
    } = functions.config();

    if (!apikey) {
      throw new functions.https.HttpsError('no-api-key', 'No API key');
    }

    const multipassify = new Multipassify(apikey);

    const customerData = {
      email: context.auth.token.email,
      created_at: new Date().toISOString(),
      return_to: 'https://pfcorders.com/',
    };

    const token = multipassify.encode(customerData);
    console.log(token);

    const url = multipassify.generateUrl(customerData, 'pfcorders.myshopify.com');

    // Return the URL instead of redirecting
    return url;
  } catch (error) {
    console.log(error);
    throw new functions.https.HttpsError('internal', 'Internal Server Error');
  }
});

export default connectToShopify;
