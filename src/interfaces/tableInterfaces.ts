interface orderDetails {
  id: string;
  drinkName: string;
  drinkImg: string;
  customisation: string;
  amount: number;
  drinkStatus: string;
  action: string;
}

interface Order {
  date: string;
  orderId: string;
  machineName: string;
  user: {
    f_name: string;
    l_name: string;
    id: string;
    age: number;
    phone: string;
    email: string;
  };
  totalAmount: number;
  status: string;
  orderDetails: orderDetails[];
}

export interface TableProps {
  tableData: {
    orders: Order[];
  };
}
export interface OrderDetailsTable {
  tableData: Order;
}
interface Filter {
  machineName: {
    name: string;
    no: number;
    id: string;
    icon: string;
  };
  address: string;
}

export interface FilterProps {
  filterData: {
    filters: Filter[];
  };
}
