# BTP CDS Simple Display App

A simple SAP Cloud Application Programming Model (CAP) application built with CDS (Core Data Services) for displaying product data on SAP Business Technology Platform (BTP).

## Project Structure

```
btp-cds-app/
├── db/
│   └── data-model.cds       # CDS data model (Products & Categories)
├── srv/
│   ├── cat-service.cds      # OData service definition
│   └── cat-service.js       # Service implementation
├── app/
│   └── index.html           # Simple HTML UI
├── package.json             # Node.js dependencies
└── README.md                # This file
```

## Features

✨ **Simple Data Display** - Display products and categories with a clean UI
- Product catalog with name, description, price, stock, and category
- Category listing
- Statistics dashboard (total products, stock, inventory value, avg price)

🎨 **Modern UI** - Responsive design with beautiful styling
- Gradient background
- Interactive tables
- Real-time data refresh
- Stock status indicators (Low/Medium/High)

🔧 **CDS & OData** - Standard SAP technologies
- OData v4 API
- Type-safe CDS data models
- Mock data service

## Prerequisites

- Node.js 16+
- SAP CDS CLI: `npm install -g @sap/cds-dk`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bhupendrabharambe/btp-cds-app.git
cd btp-cds-app
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:
```bash
npm start
```

Or use watch mode for development:
```bash
npm run watch
```

The application will be available at:
- **UI**: http://localhost:4004/app/index.html
- **API**: http://localhost:4004/odata/v4/catalog-service

## API Endpoints

### Products
```
GET /odata/v4/catalog-service/Products
```

Response:
```json
{
  "value": [
    {
      "ID": 1,
      "name": "Laptop",
      "description": "High performance laptop",
      "price": 999.99,
      "stock": 50,
      "category": "Electronics"
    }
  ]
}
```

### Categories
```
GET /odata/v4/catalog-service/Categories
```

Response:
```json
{
  "value": [
    {
      "ID": 1,
      "name": "Electronics",
      "description": "Electronic devices and equipment"
    }
  ]
}
```

## Sample Data

The application comes pre-loaded with sample products:

- **Laptop** - $999.99 (50 units) - Electronics
- **Mouse** - $29.99 (200 units) - Accessories
- **Keyboard** - $149.99 (100 units) - Accessories
- **Monitor** - $399.99 (75 units) - Electronics

And 3 sample categories:
- Electronics
- Accessories
- Software

## Customization

### Add More Products
Edit `srv/cat-service.js` in the `READ` handler for Products to add more sample data.

### Modify Data Model
Edit `db/data-model.cds` to add or change entity structures.

### Update UI
Edit `app/index.html` to customize the appearance and functionality.

## Deployment to BTP

1. Build the project:
```bash
npm run build
```

2. Deploy to BTP Cloud Foundry:
```bash
cf login
npm run deploy
```

## Technologies Used

- **SAP CAP** - Cloud Application Programming Model
- **CDS** - Core Data Services for data modeling
- **Node.js** - JavaScript runtime
- **OData v4** - RESTful API standard
- **SQLite** - Local database (development)

## Project Commands

- `npm start` - Start the CDS server
- `npm run watch` - Start in watch mode for development
- `npm run debug` - Start with debugging enabled
- `npm run build` - Build the project
- `npm run deploy` - Deploy to BTP

## Troubleshooting

### Port Already in Use
If port 4004 is already in use, you can specify a different port:
```bash
cds run --port 5000
```

### Module Not Found
Make sure all dependencies are installed:
```bash
npm install
```

### Cannot Connect to Service
Ensure the CDS server is running with `npm start` before accessing the UI.

## License

UNLICENSED

## Author

Created for BTP demonstration purposes.

---

**Happy Coding! 🚀**
