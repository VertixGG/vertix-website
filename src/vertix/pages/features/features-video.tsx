import ReactMarkdown from 'react-markdown'

const markdown = `
## Features - Video

#### Simple video which demonstrates the features.
`;

const explainClaim = `
> The (😈 \`Claim Channel\`) timers are reduced for video purposes.
`;

export default function FeaturesVideo() {
    return (
        <div className="container box-1">
            <ReactMarkdown children={ markdown }/>
            <div className="row p-5">
                <iframe className="pe-0 ps-0" width="540" height="515" src="https://www.youtube.com/embed/q8hBM-idTJc"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>

            <ReactMarkdown children={ explainClaim }/>

        </div>
    );
}
