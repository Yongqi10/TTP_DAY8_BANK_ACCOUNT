import React,{useState,useEffect,Fragment} from 'react';
import './Debits.css'
function Content() {
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

    useEffect(() => {
        GETDebitsAPI()
        GETCreditAPI()
      }, []);

      console.log(totalForCredit)
      console.log(Debit)
    return (

        <Fragment>
            <h3 className="width">Content</h3>
            <ul>
                <li>
                    <div>Debits</div>
                    {
                        Debit.reduce((previousValue, currentValue) => {
                            previousValue.amount + currentValue.amount
                        })
                    }
                    <div>{totalForDebit}</div>
                </li>
            </ul>
        </Fragment>

    );
}

export default Content;