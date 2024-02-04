/*
import { https } from 'firebase-functions';
import { initializeApp, firestore } from 'firebase-admin';

initializeApp();

const WEBFLOW_API_KEY = 'your-webflow-api-key'; // Replace with your Webflow API key
const WEBFLOW_CLIENT_ID = 'your-webflow-client-id'; // Replace with your Webflow client ID
const WEBFLOW_CLIENT_SECRET = 'your-webflow-client-secret'; // Replace with your Webflow client secret

export const webflowWebhookHandler = https.onRequest(async (req, res) => {
    try {
        // Verify that the request is from Webflow (you can implement your own verification logic)

        const deletedItemSlug = req.body.slug; // Adjust this based on Webflow webhook payload

        // Authenticate with Webflow API
        const webflowAuthResponse = await fetch('https://api.webflow.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                client_id: WEBFLOW_CLIENT_ID,
                client_secret: WEBFLOW_CLIENT_SECRET,
            }),
        });

        const webflowAuthData = await webflowAuthResponse.json();
        const webflowAccessToken = webflowAuthData.access_token;

        // Fetch data from Webflow using the access token
        const webflowItemResponse = await fetch(
            `https://api.webflow.com/collections/your-collection-id/items?api_version=1.0.0&access_token=${webflowAccessToken}`
        );

        const webflowItemData = await webflowItemResponse.json();

        // Retrieve all users from Firestore
        const usersSnapshot = await firestore().collection('users').get();

        // Loop through users and update completedLessons array
        usersSnapshot.forEach(async (userDoc) => {
            const userId = userDoc.id;
            const userData = userDoc.data();
            const completedLessons = userData.completedLessons || [];

            // Check if completedLessons array contains deletedItemSlug
            const index = completedLessons.indexOf(deletedItemSlug);
            if (index !== -1) {
                // Remove deletedItemSlug from completedLessons array
                completedLessons.splice(index, 1);

                // Update the Firestore document
                await firestore().collection('users').doc(userId).update({
                    completedLessons: completedLessons,
                });
            }
        });

        res.status(200).send('Webhook processed successfully');
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).send('Internal Server Error');
    }
});
*/
