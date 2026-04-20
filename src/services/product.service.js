export class ProductService {
  static BASE_URL = 'https://fakestoreapi.com';

  static async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.BASE_URL}/${endpoint}`, options);
      
      // Si la API responde con error
      if (!response.ok) {
        console.log(`El servidor respondio con un error ${response.status}.`);
        return null; 
      }

      return await response.json();
    } catch (error) {
      console.error(`Error en la solicitud a la API: ${error}` , error.message);
      return null;
    }
  }

  // Métodos que utilizan la base de request 
  static getAll = () => this.request('products');
  static getById = (id) => this.request(`products/${id}`);
  static create = (data) => this.request('products', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  static delete = (id) => this.request(`products/${id}`, { method: 'DELETE' });
}