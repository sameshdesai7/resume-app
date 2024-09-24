import { TypeAnimation } from 'react-type-animation';

export default function AutoTyper() {
  return (
    <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'TypeScript.',
                                    2000, 
                                    'React.',
                                    2000,
                                    'Django.',
                                    2000,
                                    'Java.',
                                    2000,
                                    'Python.',
                                    2000,
                                    'C#.',
                                    2000,
                                    'HTML.',
                                    2000,
                                    'C.',
                                    2000,
                                    '.NET.',
                                    2000,
                                    'Agile.',
                                    2000,
                                    'GitHub.',
                                    2000,
                                    'Jira.',
                                    2000,
                                    'Linux.',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
  );
};