export default function DevyDigitalWebsite(){
return (
<div className='min-h-screen bg-white text-black'>
<nav className='flex justify-between p-6 shadow-sm'>
<h1 className='text-2xl font-bold'>DEVY DIGITAL</h1>
<button className='bg-black text-white px-5 py-2 rounded-2xl'>Let's Turn Your Attention Into Revenue</button>
</nav>

<section className='px-8 py-24 text-center'>
<div className='max-w-4xl mx-auto'>
<p className='uppercase tracking-widest text-gray-500'>Marketing & Sales Agency</p>
<h1 className='text-6xl font-bold mt-4'>Turning Attention Into Revenue</h1>
<p className='mt-6 text-xl text-gray-600'>We build growth systems that help businesses attract, convert, and scale.</p>
<div className='mt-8 flex gap-4 justify-center'>
<button className='bg-black text-white px-6 py-3 rounded-2xl'>Book Consultation</button>
<button className='border px-6 py-3 rounded-2xl'>Explore DEVY</button>
</div>
</div>
</section>

<section className='p-10 grid md:grid-cols-2 gap-10'>
<div>
<h2 className='text-4xl font-bold'>About DEVY</h2>
<p className='mt-6 text-gray-600'>DEVY DIGITAL exists because businesses need more than visibility. They need strategy, sales systems and measurable growth.</p>
</div>
<div className='rounded-3xl bg-gray-100 h-80 flex items-center justify-center'>Editable Background Image Slot</div>
</section>

<section className='p-10'>
<h2 className='text-4xl font-bold text-center'>Services</h2>
<div className='grid md:grid-cols-3 gap-6 mt-10'>
{['SEO','Social Media Management','Social Media Marketing','Digital Marketing Strategy','Sales Strategy','Content Creation','Lead Generation','Brand Identity','Business Consulting','Email Marketing','+ Add Service'].map(item=>(<div className='p-6 rounded-3xl shadow'><h3 className='font-bold'>{item}</h3><p className='text-gray-500 mt-3'>Editable description and benefits.</p></div>))}
</div>
</section>

<section className='p-10 bg-gray-50'>
<h2 className='text-4xl font-bold text-center'>Founder</h2>
<div className='grid md:grid-cols-2 gap-8 mt-10'>
<div className='bg-white rounded-3xl h-72 flex justify-center items-center'>Click to Add Founder Photo</div>
<div><h3 className='text-2xl font-bold'>Denford Musvosvi</h3><p>Managing Director</p><p className='mt-5 text-gray-600'>Editable founder bio goes here.</p></div>
</div>
</section>

<section className='p-10'>
<h2 className='text-4xl font-bold text-center'>Portfolio</h2>
<div className='grid md:grid-cols-3 gap-6 mt-10'>
{[1,2,3].map(i=><div className='h-60 bg-gray-100 rounded-3xl flex items-center justify-center'>Add Project {i}</div>)}
</div>
</section>

<section className='p-10 bg-gray-50'>
<h2 className='text-4xl font-bold text-center'>Testimonials</h2>
<div className='mt-10 rounded-3xl p-8 bg-white text-center'>Add testimonial here</div>
</section>

<footer className='p-10 text-center'>
<p>0701402265 | devydigitalism@gmail.com</p>
<p>TikTok: Devy Marketing</p>
</footer>
</div>)
}
