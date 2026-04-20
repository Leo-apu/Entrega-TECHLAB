import { ProductService } from './services/product.service.js';

export const runAction = async (args) => {
  const [method, path, ...params] = args;
  const id = path?.split('/')[1];

  // --- LÓGICA PARA LISTAR TODO (GET products) ---
  if (method === 'GET' && !id) {
    const products = await ProductService.getAll();
    
    // Limpiar listado para mostrar en consola
    if (products) {
      const cleanList = products.map(p => ({
        ID: p.id,
        Título: p.title.length > 35 ? p.title.substring(0, 35) + "..." : p.title,
        Precio: `$${p.price.toFixed(2)}`,
        Categoría: p.category
      }));

      console.log("\n LISTADO DE PRODUCTOS EN TIENDA");
      console.table(cleanList);
    }
  } 

  // --- LÓGICA PARA UN PRODUCTO (GET products/15) ---
  else if (method === 'GET' && id) {
    const p = await ProductService.getById(id);

    // Limpiar detalle para mostrar en consola
    if (p) {
      console.log(`\n DETALLE DEL PRODUCTO `);
      console.log(`-----------------------------------`);
      console.log(` ID: ${p.id}`);
      console.log(` Título: ${p.title}`);
      console.log(` Precio: $${p.price}`);
      console.log(` Categoría: ${p.category}`);
      console.log(` Descripción: ${p.description.substring(0, 100)}...`);
      console.log(`-----------------------------------\n`);
    }
  }

  // --- LÓGICA PARA CREAR (POST) ---
  else if (method === 'POST') {
    const [title, price, category] = params;
    const res = await ProductService.create({ title, price, category });
    console.log(`\n ¡Éxito! Producto creado. ID asignado: ${res.id}\n`);
  } 

  // --- LÓGICA PARA BORRAR (DELETE) ---
  else if (method === 'DELETE' && id) {
    const res = await ProductService.delete(id);
    console.log(`\n  Producto ${id} eliminado. Respuesta API:`, res ? "OK" : "Error");
  }
};