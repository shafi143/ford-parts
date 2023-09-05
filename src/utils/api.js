// vinLookupApi.js
import axios from 'axios';

const apiKey = '7Yj9CBKu09nE/sleLCAJew==rbb4UpGci0CGtY9X'; // Replace with your actual API key
const baseURL = 'https://api.api-ninjas.com/v1/vinlookup';

// Function to perform a VIN lookup
const performVinLookup = async (vin) => {
  try {
    const response = await axios.get(`${baseURL}?vin=${vin}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default performVinLookup;
