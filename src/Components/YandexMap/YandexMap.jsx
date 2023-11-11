import React, {useEffect, useRef} from "react";
import {useYMaps, YMaps, Map} from "@pbe/react-yandex-maps";
import s from './yandexMap.module.scss';

const YandexMap = () => {

    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map']);

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

         new ymaps.Map(mapRef.current, {
            center: [45.035470, 38.975313],
            zoom: 10,
        });
    //
    //     var multiRoute = new ymaps.multiRouter.MultiRoute({
    //         // Описание опорных точек мультимаршрута.
    //         referencePoints: [
    //             [55.734876, 37.59308],
    //             "Москва, ул. Мясницкая"
    //         ],
    //         // Параметры маршрутизации.
    //         params: {
    //             // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
    //             results: 2
    //         }
    //     }, {
    //         // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
    //         boundsAutoApply: true
    //     });
    //     myMap.geoObjects.add(multiRoute);
    }, [ymaps]);


    return (
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
    )
}

export default YandexMap;