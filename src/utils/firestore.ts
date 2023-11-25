import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebaseApp from './firebaseConfig';

const db = getFirestore(firebaseApp);

export async function addCity() {
  const cityData = {
    name: 'New City',
    state: 'NS',
    country: 'Country',
  };

  try {
    // Agrega un nuevo documento con un ID generado automáticamente
    await setDoc(doc(db, 'cities'), cityData);

    console.log('Document successfully added!');
  } catch (error) {
    console.error('Error adding document: ', error);
  }