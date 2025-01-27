interface SunMoonIconProps {
  className?: string;
}

const SunMoonIcon: React.FC<SunMoonIconProps> = ({ className }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20.752 15.752A9.719 9.719 0 0 1 17 16.5c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 2 12a9.75 9.75 0 0 0 15.159 8.113 9.753 9.753 0 0 0 3.593-4.361Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 2.75a.75.75 0 1 0-1.5 0V5a.75.75 0 0 0 1.5 0V2.75Zm6.144 3.166a.75.75 0 1 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM9.88 9.63a3 3 0 1 1 2.835 5.035 9 9 0 0 0 1.885.76 4.505 4.505 0 0 0 1.9-3.674 4.5 4.5 0 0 0-8.173-2.599c.182.655.437 1.288.76 1.885A3 3 0 0 1 9.88 9.63ZM18.749 11a.75.75 0 0 0 0 1.5H21a.75.75 0 1 0 0-1.5h-2.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SunMoonIcon;
