// import css module
import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div>

            <h1>About</h1>


            {/* more than one style can use string interpolation */}
            <p className={styles.coolColor}>This is the about page</p>
            <p className={styles.coolColor}>{`don't use apostrophes unless they are in backticks`}</p>


            <h2>I am a different color!!!!!</h2>
            {/* styled jsx is great for conditional rendering */}
            <style jsx>
                {`
                    h2 {
                        color: red;
                    }
                `}
            </style>

            {/* two ways of rendering images
                1. stored locally in the public folder
                2. url from the internet
            */}

            <img 
                src="/next.svg"
                alt="nextjs logo"
                width="200"
                height="200"
            />
            <br/>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                alt="nextjs logo"
                width="200"
                height="200"
            />





        </div>
    )
}