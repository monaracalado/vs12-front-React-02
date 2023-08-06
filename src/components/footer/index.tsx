import "./styleFooter.css";
import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface FooterProps {
  github: string;
  linkedin: string;
}

export default function Footer({ github, linkedin }: FooterProps): JSX.Element {
  return (
    <footer className='footer'>
      <Box className="boxFooter">
        <Link className="linkFooter" title='Linkedin' href={linkedin} target="_blank">
          <LinkedInIcon/>
        </Link>
        <Link className="linkFooter" title='GitHub' href={github} target="_blank">
          <GitHubIcon/>
        </Link>
      </Box>
      <Typography className="textFooter">
        &copy; 2023 Developed by <strong>Monara Calado</strong>
      </Typography>
    </footer>
  );
}
