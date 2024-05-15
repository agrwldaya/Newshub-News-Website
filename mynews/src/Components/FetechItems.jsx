import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewsSliceAction } from '../Store/newsSlice';
import { fetchSliceActions } from '../Store/fetchslice';
import { weatherSliceAction } from '../Store/weatherSlice';
const Fetchitem = () => {
    
    // https://api.openweathermap.org/data/2.5/weather?lat=31.4685&lon=76.2708&appid=28b3988729e01112d192c25c4a50daf7
    const fetchStatus = useSelector((store) => store.fatchStatus);
    const rout = useSelector((store) => store.route);
    // console.log(rout)
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (fetchStatus.fetchDone) return;
        dispatch(fetchSliceActions.matchingStarted());
        
        const controller = new AbortController();
        const signal = controller.signal;
        
        fetch(`https://newsapi.org/v2/top-headlines?country=${rout.country}&category=${rout.category}&apiKey=5e355bb8a44043ff9446e3cc56db9e3d&page=${rout.page}&pagesize=99`, { signal })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                dispatch(fetchSliceActions.markFetchDone());    
                dispatch(fetchSliceActions.matchingFinished());  
                dispatch(NewsSliceAction.addInitialItem(data.articles));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        // return () => {
        //     controller.abort();
        // };
    }, [dispatch,rout,fetchStatus.fetchDone]);

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=31.4685&lon=76.2708&appid=52cd3984f97cb72ddf23e269a6f8b6b8`)
        .then((res)=>{
            // console.log(data)
            return res.json()
        }).then((data)=>{
            dispatch(weatherSliceAction.getWeather(data));
        //    console.log(data)
        })
    },[])

     
    return (
        <>
            {/* Any JSX you want to return */}
        </>
    );
};

export default Fetchitem;
