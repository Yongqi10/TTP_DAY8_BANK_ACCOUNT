import React,{useState,useEffect,Fragment} from 'react';
import './Debits.css'
function Content(props) {


    const [accountBalance, username] = [props.accountBalance, props.username]


    console.log(username,':::::', accountBalance)

    const [Credit,setCredit] = useState(()=>{return []})
    const [Debit, setDebit] = useState(() => {
        return [];
      });
    const [loading, setLoading] = useState(true)
    const [totalForDebit,setTotalForDebit] = useState(0)
    const [totalForCredit,settotalForCredit] = useState(0)
  


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




    // const calculate = (amount) =>{

    //     useEffect(()=> {
    //         setTotalForDebit((prv) => prv+amount)
    //     },[totalForDebit])

    // }


    useEffect(() => {
        GETDebitsAPI()
        GETCreditAPI()
      }, []);

      console.log(totalForDebit)
      console.log(Debit)
    return (

        <Fragment>

            <h3 className="width">Content</h3>
            <h2 className="width">Hello:&nbsp;{username}</h2>
            <ul>
                <li>
                    <div>Debits</div>
                    {
                        // Debit.reduce((previousValue, currentValue) => {
                        //     previousValue.amount + currentValue.amount
                        // })

                        // Debit.map((item) => {
                        //    return calculate(item.amount)
                        // })
                    }
                    <div>{totalForDebit}</div>
                </li>
            </ul>
        </Fragment>

    );
}

export default Content;