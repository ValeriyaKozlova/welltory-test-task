import './styles/global.scss';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';
import Header from './components/Header';
import SubscriptionsInfoSection from './components/SubscriptionsInfoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SubscriptionSection />
        <SubscriptionsInfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
