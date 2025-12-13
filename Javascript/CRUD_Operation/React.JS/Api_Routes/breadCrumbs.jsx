import { useLocation, Link } from 'react-router-dom';

export const BreadCrumbs = () => {
    const location = useLocation();

    let CurrLocation = '';

    const crums = locations.pathname
        .split('/')
        .filter((el) => el === '')
        .map((el) => {
            CurrLocation += '/${el}';

            return (
                <div style=[{ padding: 20 }} key={el}>
                    <link to={CurrLocation}>{el}</link>
                </div>
            );
        });
        console.log('~')
}
