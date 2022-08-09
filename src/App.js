import './App.css';
import Card from "./Card"


function App() {
    const data = [
      {
        plan: "FREE",
        price: 0,
        perks: [
          {
            perk: "✅ Single User",
            isEnable: true
          },
          {
            perk: "✅ 5GP Storage",
            isEnable: true
          },
          {
            perk: "✅ Unlimited Public Project",
            isEnable: true
          },
          {
            perk: "✅ Community Access",
            isEnable: true
          },
          {
            perk: "❌ Unlimited Private Project",
            isEnable: false
          },
          {
            perk: "❌ Dedicated Phone Support",
            isEnable: false
          },
          {
            perk: "❌ Free Subdomine",
            isEnable: false
          },
          {
            perk: "❌ Monthly Status Reports",
            isEnable: false
          }
  
        ]
      },
      {
        plan: "PRIMIUM",
        price: 39,
        perks: [
          {
            perk: "✅ 5 User",
            isEnable: true,
            isBold:true
          },
          {
            perk: "✅ 50GP Storage",
            isEnable: true
          },
          {
            perk: "✅ Unlimited Public Project",
            isEnable: true
          },
          {
            perk: "✅ Community Access",
            isEnable: true
          },
          {
            perk: "✅ Unlimited Private Project",
            isEnable: true
          },
          {
            perk: "✅ Dedicated Phone Support",
            isEnable: true
          },
          {
            perk: "✅ Free Subdomine",
            isEnable: true
          },
          {
            perk: "❌ Monthly Status Reports",
            isEnable: false
          }
  
        ]
  
      },
      {
        plan: "VIP",
        price: 49,
        perks: [
          {
            perk: "✅ Unlimited User",
            isEnable: true,
            isBold:true
          },
          {
            perk: "✅ 150GP Storage",
            isEnable: true
          },
          {
            perk: "✅ Unlimited Public Project",
            isEnable: true
          },
          {
            perk: "✅ Community Access",
            isEnable: true
          },
          {
            perk: "✅ Unlimited Private Project",
            isEnable: true
          },
          {
            perk: "✅ Dedicated Phone Support",
            isEnable: true
          },
          {
            perk: "✅ Unlimited Free Subdomine",
            isEnable: true,
            isBold:true
          },
          {
            perk: "✅ Monthly Status Reports",
            isEnable: true
          }
  
        ]
      },
    ]
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((item) => {
                return <Card cardData={item}></Card>
              })
            }
          </div>
        </div>
      </section>
    )
  }
  
  export default App;
  