import { TypeAnimation } from 'react-type-animation';

export default function AutoTyper() {
  return (
    <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'I am proficient in TypeScript',
                                    1000, 
                                    'I am proficient in React',
                                    1000,
                                    'I am proficient in Java',
                                    1000,
                                    'I am proficient in Python',
                                    1000,
                                    'I am proficient in C#',
                                    1000,
                                    'I am proficient in HTML',
                                    1000,
                                    'I am proficient in C',
                                    1000,
                                    'I am proficient in .NET',
                                    1000,
                                    'I am proficient in Agile',
                                    1000,
                                    'I am proficient in GitHub',
                                    1000,
                                    'I am proficient in Jira',
                                    1000,
                                    'I am proficient in Linux',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
  );
};