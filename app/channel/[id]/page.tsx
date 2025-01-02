
type ChannelPageProps = {
  params: {
    id: string;
  }
}

export default function page(prop: ChannelPageProps){
  return(
    <div>
      channel / {prop.params.id}
    </div>
  )
}