export function Card({ title, children, className }) {
    return (
        <div className={['bg-blue-800 bg-opacity-40 rounded-lg text-blue-100 border border-blue-600 border-opacity-30', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 className="text-blue-200 font-semibold">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
