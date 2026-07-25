export function formatRelativeDate(date) {

  if (!date) return "-";

  const now = new Date();

  const target = new Date(date);

  const seconds = Math.floor(
    (now - target) / 1000
  );

  if (seconds < 60) {

    return "Just now";

  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {

    return `${minutes} min ago`;

  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {

    return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  }

  const days = Math.floor(hours / 24);

  if (days === 1) {

    return "Yesterday";

  }

  if (days < 7) {

    return `${days} days ago`;

  }

  return target.toLocaleDateString("en-IN", {

    day: "numeric",

    month: "short",

    year: "numeric",

  });

}