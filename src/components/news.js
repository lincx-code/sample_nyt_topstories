const formatDate = (date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const formattedDate = new Date(date);

    return months[formattedDate.getMonth()] + " " +  formattedDate.getDate() + ", " + formattedDate.getFullYear();
}


const News = ({data}) =>
    <li data-section={data.section}>
        <p className="title">{data.title}</p>
        { 
            data.multimedia ? (
                <img src={data.multimedia[0].url} alt={data.multimedia[0].caption}></img>
            ) : ( null )  
        }
        <p className="description">{data.abstract} <a href={data.url} target="_new">Read more...</a></p>
        <p className="date">{formatDate(data.published_date)}</p>
    </li>

export default News