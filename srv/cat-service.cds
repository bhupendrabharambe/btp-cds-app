using { com.example.app } from '../db/data-model';

service CatalogService {
  entity Products as projection on app.Products;
  entity Categories as projection on app.Categories;
}
