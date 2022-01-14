import React,{useState,useEffect,Fragment} from 'react';
import './Content.css'
import { Link } from 'react-router-dom';
function Content(props) {


    const [accountBalance, username] = [props.accountBalance, props.username]


    console.log(username,':::::', accountBalance)

    const [Credit,setCredit] = useState(()=>{return []})
    const [Debit, setDebit] = useState(() => {
        return [];
      });
    const [loading, setLoading] = useState(true)
    const [totalForDebit,setTotalForDebit] = useState(0)
    const [totalForCredit,setTotalForCredit] = useState(0)
  


    const GETDebitsAPI = async () => {
        try {
          const response = await fetch("https://moj-api.herokuapp.com/debits");
          const data = await response.json();
          setDebit((previous) => (previous = data));
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      };

      const GETCreditAPI = async () =>{

        try {

            const response = await fetch("https://moj-api.herokuapp.com/credits")
            const data = await response.json()
            setCredit(previous => previous = data)
            setLoading(false)
        }
        catch(err)
        {
            console.error(err)
        }

    }



    useEffect(() => {
        GETDebitsAPI()
        GETCreditAPI()
      }, []);
    //   [Debit,Credit]
      console.log(totalForDebit)
      console.log(Debit)

     let totalForD = Object.values(Debit).reduce((t,{amount})=>{
        return t+amount
     },0)

     useEffect(()=>{
         setTotalForDebit((prv)=>prv = totalForD)
     },[totalForD])

     let totalForC =  Object.values(Credit).reduce((t,{amount})=>{
        return t+amount
     },0)

     useEffect(()=>{
        setTotalForCredit((prv)=>prv = totalForC)
    },[totalForC])

    return (

        <Fragment>

            <h3 className="width">Content</h3>
            <h2 className="width">Hello:&nbsp;{username}</h2>
            <Link to = '/Debits' style={{ textDecoration: 'none' }}>
                <div className='Debits width'><h2 className='title'>Debits</h2><div>Total Amount:&nbsp;<div className='amount'>{totalForDebit}</div></div></div>
            </Link>
            <Link to = '/Credits' style={{ textDecoration: 'none' }}>
                <div className='Credits width'><h2 className='title'>Credits</h2><div>Total Amount:&nbsp;<div className='amount'>{totalForCredit}</div></div></div>
            </Link>

        </Fragment>

    );
}

export default Content;