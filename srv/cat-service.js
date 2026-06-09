module.exports = (srv) => {
  // Add sample data on startup
  const { Products, Categories } = srv.entities;

  // Mock data initialization
  srv.on('READ', Products, async (req) => {
    return [
      {
        ID: 1,
        name: 'Laptop',
        description: 'High performance laptop',
        price: 999.99,
        stock: 50,
        category: 'Electronics',
        createdAt: new Date(),
        modifiedAt: new Date()
      },
      {
        ID: 2,
        name: 'Mouse',
        description: 'Wireless mouse',
        price: 29.99,
        stock: 200,
        category: 'Accessories',
        createdAt: new Date(),
        modifiedAt: new Date()
      },
      {
        ID: 3,
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: 149.99,
        stock: 100,
        category: 'Accessories',
        createdAt: new Date(),
        modifiedAt: new Date()
      },
      {
        ID: 4,
        name: 'Monitor',
        description: '4K UltraHD Monitor',
        price: 399.99,
        stock: 75,
        category: 'Electronics',
        createdAt: new Date(),
        modifiedAt: new Date()
      }
    ];
  });

  srv.on('READ', Categories, async (req) => {
    return [
      { ID: 1, name: 'Electronics', description: 'Electronic devices and equipment' },
      { ID: 2, name: 'Accessories', description: 'Computer and office accessories' },
      { ID: 3, name: 'Software', description: 'Software and applications' }
    ];
  });
};
