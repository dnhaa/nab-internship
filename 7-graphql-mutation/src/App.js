import logo from './logo.svg';
import './App.css';
import {gql, useMutation, useQuery, useLazyQuery} from '@apollo/client';
import {useState, useEffect, userCallback, useMemo, useCallback} from 'react';



const ADD_TO_CART = gql`
  mutation addItem($item: AddToCartInput!){
    addItem(input: $item){
      id
      items{
        id
        quantity
        unitTotal{
          amount
        }
      }
      totalItems
      grandTotal{
        amount
      }
    }
  }
`
const GET_CART = gql`
  query {
    cart(id: "GiohangcuaBach") {
      id
      items{
        id
        quantity
        unitTotal{
          amount
        }
      }
      totalItems
      grandTotal{
        amount
      }
    }
  }
`

function App() {
  const [itemId, setItemId] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [mutate, result] = useMutation(ADD_TO_CART);
  const [getCartQuery, resultQuery] = useLazyQuery(GET_CART);
  useEffect(() => {
    getCartQuery()
  }, [getCartQuery]);
  const addToCart = useCallback(() => {
    mutate({
      variables: {
        item: {
          id: itemId,
          cartId: "GiohangcuaBach",
          price: grandTotal,
          quantity: totalItems,
        }
      }
    }).then(() =>{
      resultQuery.refetch();
    });
  }, [mutate, itemId, grandTotal, totalItems, resultQuery]);
  if (resultQuery?.loading) return <span>Loading...</span>
  return (
    <div>
      <div>
        <div>
          {result?.data?.addItem.id} items
        </div>
        <div>
          {result?.data?.addItem.totalItems} items
        </div>
        
        <div>
        <table>
          <th>
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
          </th>
          
        </table>
        <div style={{"fontSize": "1.6rem", "fontWeight" : "bold"}}>LIST OF ITEMS</div>
        {result?.data?.addItem.items.map(item => 
        
          <div>{item.id}: {item.quantity} x {item.unitTotal.amount}</div>
        )}
        </div>
      </div>


     {/* this doesnt run */}
      <div>{resultQuery?.data?.cart.items.map(item => {
        <div>{item.id}: {item.quantity} x {item.unitTotal.amount}</div>
      })}</div>

      
      {/* to input data */}
      <div id='add-item'>
        <div>
          Item ID: <input 
          type="text"
          placeholder='Item ID'
          onChange={(e) => setItemId(e.target.value)}/>
          </div>
        <div>
          Price: <input 
          type="text"
          placeholder='Price'
          onChange={(e) => setGrandTotal(parseInt(e.target.value))}
          />
          </div>
        <div>
          Quantity: <input
          type="text"
          placeholder='Quantity'
          onChange={(e) => setTotalItems(parseInt(e.target.value))}
          />
          </div>
      </div>
      <button onClick={addToCart}>Add</button>
    </div>
  );
}


export default App;
