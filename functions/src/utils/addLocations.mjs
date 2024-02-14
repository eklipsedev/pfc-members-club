import { getFirestore } from 'firebase-admin/firestore';
import * as functions from 'firebase-functions';
import * as path from 'path';
import * as fs from 'fs/promises';

const uploadLocationsToFirestore = functions.https.onRequest(async (request, response) => {
  try {
    const collectionRef = getFirestore().collection('locations');
    // Read JSON data from file
    const currentModulePath = new URL(import.meta.url).pathname;
    const currentDirectory = path.dirname(currentModulePath);
    const filePath = path.join(currentDirectory, 'pfc-locations.json');
    const jsonString = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(jsonString);

    // Upload the limited data to Firestore
    for (const data of jsonData) {
      await collectionRef.add(data);
    }

    response.status(200).send('Data uploaded to Firestore!');
  } catch (error) {
    console.error('Error uploading data to Firestore:', error);
    response.status(500).send('Internal Server Error');
  }
});

export default uploadLocationsToFirestore;
