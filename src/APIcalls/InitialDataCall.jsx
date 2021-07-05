export const getAllArt = async (query) => {
  const call = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query}`,
    { method: "GET" }
  );
  const result = await call.json();
  if (!call.ok) {
    const message = `Something went wrong, sorry ${call.status}`;
    throw new Error(message);
  }

  const ids = result.objectIDs
    .slice(0, 50)
    .map(
      async (id) =>
        await (
          await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
            { method: "GET" }
          )
        ).json()
    );

  return Promise.all(ids);
};
