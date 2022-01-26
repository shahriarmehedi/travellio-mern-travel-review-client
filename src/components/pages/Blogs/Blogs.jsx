import React from 'react';
import blogImage from "../../../images/agra.png";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Blogs = () => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const allBlogs = [
        {
            "_id": 1,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 2,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 3,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 4,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 5,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 6,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 7,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 8,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 9,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 10,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 11,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 12,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 13,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },
        {
            "_id": 14,
            "title": "Mahasthangarh Tour",
            "image": blogImage,
            "travellerInfo": "kuddus",
            "category": "North Bengal",
            "description": "ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt ergergerg eryg eryhgeryheryh eryhery erye wry eryewry wey ewry wery wrey  weru ewuyewru wreueru weuw4uruewrueruw4ue4y er eyeruy weru reuerery ery eruy eru w urwt uurwurt  uery rt  urewure tu eyr t rt ueru rurt",
            "cost": 2500,
            "date": "2021-05-05",
            "location": "Bogura",
            "rating": 4.5,

        },

    ]

    let pageCount = 1
    if (allBlogs.length <= 10) {
        pageCount = 1
    }
    if (allBlogs.length > 10 && allBlogs.length <= 20) {
        pageCount = 2
    }
    if (allBlogs.length > 20 && allBlogs.length <= 30) {
        pageCount = 3
    }
    if (allBlogs.length > 30 && allBlogs.length <= 40) {
        pageCount = 4
    }
    if (allBlogs.length > 40 && allBlogs.length <= 50) {
        pageCount = 5
    }




    return (
        <div className=' w-5/6 lg:w-3/4  mx-auto min-h-screen'>
            <h1 className='pt-10 pb-8 text-4xl text-center font-bold'>Experience Blog Posts</h1>
            <p className='text-center w-3/4 mx-auto text-gray-400 pb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore magni a natus numquam consequatur odit qui animi, suscipit autem, incidunt repellat distinctio modi dolore nostrum accusantium itaque eos. Dolorum nesciunt officiis, beatae eos quia ab eveniet</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 min-h-[80vh]'>
                {
                    page === 1 && allBlogs.slice(0, 10).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                        <img className='w-full object-cover mx-auto' src={blog.image} alt="" />
                        <div className='pl-5'>
                            <h2 className='py-2 text-2xl font-bold'>{blog.title} </h2>
                            <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                            <h2 className='py-1'>Location: {blog.location} </h2>
                            <h2 className='py-1'>Rating: {blog.rating} </h2>
                            <button className='px-5 py-2 my-3 bg-rose-500 rounded text-white'>Read more</button>
                        </div>


                    </div>)
                }
                {
                    page === 2 && allBlogs.slice(10, 20).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                        <img className='w-full mx-auto' src={blog.image} alt="" />
                        <div className='pl-5'>
                            <h2 className='py-2 text-2xl font-bold'>{blog.title} </h2>
                            <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                            <h2 className='py-1'>Location: {blog.location} </h2>
                            <h2 className='py-1'>Rating: {blog.rating} </h2>
                            <button className='px-5 py-2 my-3 bg-rose-500 rounded text-white'>Read more</button>
                        </div>


                    </div>)
                }
                {
                    page === 3 && allBlogs.slice(20, 30).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                        <img className='w-full mx-auto' src={blog.image} alt="" />
                        <div className='pl-5'>
                            <h2 className='py-2 text-2xl font-bold'>{blog.title} </h2>
                            <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                            <h2 className='py-1'>Location: {blog.location} </h2>
                            <h2 className='py-1'>Rating: {blog.rating} </h2>
                            <button className='px-5 py-2 my-3 bg-rose-500 rounded text-white'>Read more</button>
                        </div>


                    </div>)
                }
                {
                    page === 4 && allBlogs.slice(30, 40).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                        <img className='w-full mx-auto' src={blog.image} alt="" />
                        <div className='pl-5'>
                            <h2 className='py-2 text-2xl font-bold'>{blog.title} </h2>
                            <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                            <h2 className='py-1'>Location: {blog.location} </h2>
                            <h2 className='py-1'>Rating: {blog.rating} </h2>
                            <button className='px-5 py-2 my-3 bg-rose-500 rounded text-white'>Read more</button>
                        </div>


                    </div>)
                }
                {
                    page === 5 && allBlogs.slice(40, 50).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                        <img className='w-full mx-auto' src={blog.image} alt="" />
                        <div className='pl-5'>
                            <h2 className='py-2 text-2xl font-bold'>{blog.title} </h2>
                            <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                            <h2 className='py-1'>Location: {blog.location} </h2>
                            <h2 className='py-1'>Rating: {blog.rating} </h2>
                            <button className='px-5 py-2 my-3 bg-rose-500 rounded text-white'>Read more</button>
                        </div>


                    </div>)
                }


            </div>
            <div className='flex items-center justify-center my-10'>
                <Stack spacing={5}>
                    <Typography>You are visiting page: <span className='text-rose-500 font-bold text-xl'>{page}</span> </Typography>
                    <Pagination count={pageCount} page={page} onChange={handleChange} />
                </Stack>

            </div>
        </div>
    );
};

export default Blogs;