type PlayListPageProps = {
  searchParams:{
    list: string
  }
}
export default function page(props: PlayListPageProps){
  return(
    <div>
      Play List / {props.searchParams.list}
    </div>
  )
}