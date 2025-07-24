import { useParams } from "react-router-dom";
import card1 from "../../assets/about-guruji.jpg";
import card2 from "../../assets/kalsarp-2.jpg";
import card3 from "../../assets/kalsarp-home-section.jpg";

const allPackages = [
  {
    title: "Online Pooja",
    slug: "online-pooja",
    price: "₹2100",
    image: card1,
    description: "A basic Kal Sarp Dosh pooja for individuals.",
  },
  {
    title: "kalsarp puja",
    slug: "kalsarp-puja",
    price: "₹5100",
    image: card2,
    description: "A comprehensive Kal Sarp Dosh pooja for the entire family.",
  },
  {
    title: "Narayan nagbali puja",
    slug: "narayan-nagbali-puja",
    price: "₹11000",
    image: card3,
    description: "A special Narayan Nagbali ritual with live video support.",
  },
  // ... more
];

export default function ServiceDetail() {

  const { slug } = useParams();
  console.log("ServiceDetail component rendered",slug);

  const selectedService = allPackages.find(pkg => 
    pkg.slug === slug
  );

  if (!selectedService) {
    return <div className="p-8 text-red-600 font-bold">Service not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow rounded-lg">
      <img src={selectedService.image} alt={selectedService.title} className="w-full h-64 object-cover mb-6 rounded" />
      <h1 className="text-3xl font-bold text-orange-600 mb-2">{selectedService.title}</h1>
      <p className="text-xl text-gray-700 mb-4">{selectedService.price}</p>
      <p className="text-gray-600">{selectedService.description}</p>
    </div>
  );
}
