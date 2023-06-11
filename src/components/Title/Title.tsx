import './title.css'

const Title = ({title, sub} : {title: string, sub: string}) => {
    return(
        <div className='title'>
            <h1>
                {title}
            </h1>
            <h2>
                {sub}
            </h2>
        </div>
    )
}

export default Title;