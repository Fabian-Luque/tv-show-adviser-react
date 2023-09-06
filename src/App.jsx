import { useEffect, useState } from "react";

import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SerachBar } from "./components/SerachBar/SerachBar";


export function App() {
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recomendationList, setRecomendationList] = useState([]); 

    async function fetchPopulars(){
        try {
            const popularTVShowList = await TVShowAPI.fetchPopulars();
            if (popularTVShowList.length > 0) {
                setCurrentTVShow(popularTVShowList[0]);
            }
        } catch (error) {
            alert("Something went wrong when fetching the popular tv shows");
        }
    }

    async function fetchRecomendations(tvShowId){
        try {
            const recomendationListResp = await TVShowAPI.fetchRecomendations(tvShowId);
            if (recomendationListResp.length > 0) {
                setRecomendationList(recomendationListResp.slice(0, 10));
            }
        } catch (error) {
            alert("Something went wrong when fetching the popular tv shows");
        }
    }

    async function fetchByTitle(title){
        try {
            const searchResp = await TVShowAPI.fetchByTitle(title);
            if (searchResp.length > 0) {
                setCurrentTVShow(searchResp[0])
            }
        } catch (error) {
            alert("Something went wrong when fetching the popular tv shows");
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if (currentTVShow) {
            fetchRecomendations(currentTVShow.id)
        }
    }, [currentTVShow])


    function updateCurrentTVShow(tvShow) {
        setCurrentTVShow(tvShow);
    }


    return (
        <div className={s.main_container}
        style={{ 
            background: currentTVShow 
            ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : 'black'
            }}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img={logoImg} title={"Watowatch"} subtitle={"find a show you may like"}/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        {/* <input style={{ width: "100%"}} type="text" /> */}
                        <SerachBar onSubmit={fetchByTitle} />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                { currentTVShow && 
                    <TVShowDetail  tvShow={currentTVShow}/>
                }
            </div>
            <div className={s.recomended_tv_show}>
                { currentTVShow && 
                    <TVShowList 
                        onClickItem={updateCurrentTVShow} 
                        tvShowList={recomendationList}
                    />
                }
                
            </div>
        </div>
    )
}