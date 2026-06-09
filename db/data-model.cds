namespace com.example.app;

entity Products {
  key ID : Integer;
  name : String;
  description : String;
  price : Decimal(10,2);
  stock : Integer;
  category : String;
  createdAt : Timestamp;
  modifiedAt : Timestamp;
}

entity Categories {
  key ID : Integer;
  name : String;
  description : String;
}
