

export default function MemberCircles({ imgs, size, side = "left" }) {
  return (
    <>
      {imgs.map((i, index) => {
        // Calculate the right offset based on the side
        const offset =
          side === "right"
            ? -(imgs.length - 1 - index) * 10 // Reverse offset for right side with negative values
            : index * 10; // Normal offset for left side

        return (
          <div
            key={i.id}
            className="relative overflow-hidden rounded-full border-[1px] border-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              right: `${offset}px`,
            }}
          >
            <img src={i.img} alt={i.name} />
          </div>
        );
      })}
    </>
  );
}
