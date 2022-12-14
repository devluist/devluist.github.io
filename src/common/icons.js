import { Link, Image } from '@chakra-ui/react';


export const TwitterIcon = () => <Link href="https://twitter.com/dev_luist" aria-label='My Twitter account' colorScheme="twitter" isExternal rel="noreferrer">
    <Image
        alt='My Twitter account'
        width="30px"
        height="30px"
        src='assets/images/logo_twitter.svg'
    />
</Link>

export const TelegramIcon = () => <Link href="https://t.me/dev_luist" aria-label='My Telegram account' colorScheme="telegram" isExternal rel="noreferrer">
    <Image
        alt='My Telegram account'
        width="30px"
        height="30px"
        src='assets/images/logo_telegram.svg'
    />
</Link>

export const LinkedinIcon = () => <Link href="https://linkedin.com/in/luistena" aria-label='My LinkedIn account' colorScheme="linkedin" isExternal rel="noreferrer">
    <Image
        alt='My LinkedIn account'
        width="30px"
        height="30px"
        src='assets/images/logo_linkedin.svg'
    />
</Link>

export const GithubIcon = () => <Link href="https://github.com/devluist" aria-label='My Github account' colorScheme="github" isExternal rel="noreferrer">
    <Image
        alt='My Github account'
        width="30px"
        height="30px"
        src='assets/images/logo_github.svg'
    />
</Link>

export const EmailIcon = () => <Link href="mailto:des.luistena@gmail.com" aria-label='My Email account' alt="des.luistena@gmail.com" colorScheme="email" >
    <Image
        alt='My Email account'
        width="30px"
        height="30px"
        src='assets/images/icon_email.svg'
    />
</Link>

export const GoUpIcon = () => <Image
        alt='Go to Top of the page'
        width="30px"
        height="30px"
        src='assets/images/arrow_up.svg'
    />
