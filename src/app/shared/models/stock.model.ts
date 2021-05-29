class Stock{
  id: number;
  name: string;
  price: number;
  minimum: number;
  exclusiveMinimum: boolean;
  variation:	number;
  date:	string;

  constructor(id: number, name: string, price: number, minimum: number,
     exclusiveMinimum:boolean, variation:number, date:string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.minimum = minimum;
    this.exclusiveMinimum = exclusiveMinimum;
    this.variation = variation;
    this.date = date;
  };
}

export default Stock;
