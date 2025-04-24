import { Link } from 'react-router';

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>

export function RouterLink({ ...props }: RouterLinkProps) {
    return <Link to={props.href} {...props}>{props.children}</Link>
}
