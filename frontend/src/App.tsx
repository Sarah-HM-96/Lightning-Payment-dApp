import { WalletAdapterNetwork } from ''
import { ConnectionProvider, WalletProvider, userAnchorWallet } from ''
import { WalletModalProvider, WalletMultiButton } from ''
import { LightningWalletAdapater } from ''
import { useEffect } from "react"

require('./App.css')

function App({ lightning, accounts, contracts }) {
  const [accounts, setAccounts] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [currentTransfer, setCurrentTransfer] = useState(undefined);
  
  const lnService = require('ln-service');

  const {lnd} = lnService.authenticatedLndGrpc({
    cert: 'base64 encoded tls.cert',

  })


  useEffect(() => {
    const init = async () => {
    const {createSeed, createWallet} = require('ln-service');
    const {seed} = await createSeed({lnd});
    await createWallet({land, seed, password: '123456'});

    }
  });

  useEffect(() => {
    if(typeof contract !== 'undefined') {
      updatePayment();
    }
  }, [accounts, contract]);

  async function updatePayment() {
    const {getPayments} = require('ln-service');
    const payments = await getPayments({lnd});
  }

  async function pay() {
    const {payViaPaymentDetails} = require('ln-service');
    const destination = 'invoiceDestinationNodePublicKeyHexString';
    const id = 'paymentRequestPreimageHashHexString';
    const tokens = 80085;
    await payViaPaymentDetails({destination, id, lnd, tokens});
  }

  async function createInvoice() {
    const {createInvoice} = require('ln-service');
    const invoice = await createInvoice({lnd});
  }

  
  

    

    return (
      <div className="App">
        <button>Initialize</button>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Update</button>
        <WalletMultiButton/>
      </div>
    );
  }
}
