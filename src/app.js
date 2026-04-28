import { ProductService } from './services/product.service.js';

function formatProduct(p, priceAsString = false) {
  return [
    `id: ${p.id}`,
    `title: '${p.title}'`,
    `price: ${priceAsString ? `'${p.price}'` : p.price}`,
    `category: '${p.category}'`
  ].join("\n");
}

export const runAction = async (args) => {
  const [method, path, ...params] = args;
  const id = path?.split('/')[1];

  if (method === 'GET' && !id) {
    const products = await ProductService.getAll();

    console.log("[");
    products.forEach(p => {
      console.log(`{ id: ${p.id}, title: '${p.title}', price: ${p.price}, category: '${p.category}' },`);
    });
    console.log("]");
  }

  else if (method === 'GET' && id) {
    const p = await ProductService.getById(id);
    console.log(formatProduct(p));
  }

  else if (method === 'POST') {
    const [title, price, category] = params;

    const res = await ProductService.create({
      title,
      price: parseFloat(price),
      category
    });

    console.log(`id: ${res.id}`);
    console.log(`title: '${title}'`);
    console.log(`price: '${price}'`);
    console.log(`category: "${category}"`);
  }

  else if (method === 'PUT' && id) {
  const [title, price, category] = params;

  const res = await ProductService.update(id, {
    title,
    price: parseFloat(price),
    category
  });

    console.log(`id: ${id}`);
    console.log(`title: '${title}'`);
    console.log(`price: '${price}'`);
    console.log(`category: "${category}"`);
  }

  else if (method === 'DELETE' && id) {
    const res = await ProductService.delete(id);

    console.log(formatProduct(res));
  }
};