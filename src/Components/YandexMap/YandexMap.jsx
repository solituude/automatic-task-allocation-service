import React, {useEffect, useRef} from "react";
import {useYMaps} from "@pbe/react-yandex-maps";

const YandexMap = () => {

    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map']);

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

         var myMap = new ymaps.Map(mapRef.current, {
            center: [45.035470, 38.975313],
            zoom: 10,
        });

        var multiRoute = new ymaps.multiRouter.MultiRoute({
            // Описание опорных точек мультимаршрута.
            referencePoints: [
                "Краснодар, ул. Ставропольская, д. 140",
                "Краснодар, ул. Горького, д. 128",
                "Краснодар, ул. Красноармейская, д. 126"
            ],
            // Параметры маршрутизации.
            params: {
                // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                results: 2
            }
        }, {
            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            boundsAutoApply: true
        });
        myMap.geoObjects.add(multiRoute);
    }, [ymaps]);


    return (
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
    )
}

export default YandexMap;