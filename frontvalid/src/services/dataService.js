const BASE_URL = 'https://nodevercel-rust.vercel.app/CheckValid';

export const checkValid = async (streetName) => {
  try {
    const response = await fetch(BASE_URL, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ streetName }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error submitting data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}