import style from "./Nav.module.css"
import './../App.css'

export default function Nav(){
    
    const switchTheme = (e:any) => {

        if(e.target.checked) {
            document.querySelector('body')?.setAttribute('data-theme', 'dark')
        }
  
        else {
          document.querySelector('body')?.setAttribute('data-theme', 'light')
        }
      }

    return (
        <div className={style["background-image"]}>
            <div style={{opacity:"50%"}} className={style["gradient-background"]}></div>
            
            <img className={style["image"]} src="https://s3-alpha-sig.figma.com/img/a0f4/beb0/598988b6993552d320eca695eaadbb10?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVnslUb-20Jz2iHYhd3ibQQ1OsIH8Lmh1xba4QklmjQaTCDNPalk8LwkO1n~mL-I2-FGf0HlJeiiBvj2jBm6tEigF9eyVZAfW3HCqS7y5fU22I-p1hGsBwnHnfIPAevfGqTorD6QMoNA7tLyj15tq6n9ll~SpmXG2TVmGo~UnO~78vmbzYPSOCkXZsWqxh69yCzOG2QT0KTaqR6mCCAh25gFKUteeoLqFmr5Jmx8Qjlokw~AOIEXv7Ro080C2whhdK-v0GgKjLZ3rCWgodK6QDAlqJajrmOrSLjj0YCKnI-0io6lEydLchttp2yUWtMHw8qhbgJZud-dnaDGgiGjVQ__"
            />
        </div>
        
    )
}