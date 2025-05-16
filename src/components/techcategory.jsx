function TechCategory({ title, items }) {
  return (
    <div className="mb-10">
      <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-md p-5 bg-secondary/5 dark:bg-[#ffffff0a] dark:hover:bg-[#ffffff0f] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 flex items-center space-x-3"
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span className="text-white text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCategory;