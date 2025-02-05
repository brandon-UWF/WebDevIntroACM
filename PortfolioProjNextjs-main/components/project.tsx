// creating an interface, because that is what you need to type your props in TS apparently
interface Project {
    title: string,
    body: string,
    outcome: string
}

export default function Project({ title, body, outcome}: Project) {
    return (
        <div className="flex flex-col m-8 bg-slate-500 rounded-lg border-zinc-50 md:w-6/12">
            <h1 className="m-4">{title}</h1>
            <p className="m-4">{body}</p>
            <p className="m-4">Learning Outcome: {outcome}</p>
        </div>
    );
}