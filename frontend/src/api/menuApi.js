const API_URL = "http://localhost:5001";

export async function fetchMenuItems() {
  // React fetches menu data from the backend GET /menu route here.
  const response = await fetch(`${API_URL}/menu`);
  return response.json();
}
