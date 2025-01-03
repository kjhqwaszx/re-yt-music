import {Avatar, AvatarFallback, AvatarImage} from './ui/avatar';

export default function UserIcon(props) {
 return(
   <Avatar>
     <AvatarImage src="https://github.com/shadcn.png" />
     <AvatarFallback>CN</AvatarFallback>
   </Avatar>
 )
}