export function mapModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}

export function mapModifiersTailWind(
  baseClassName: string = '',
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${suffix}`,
      baseClassName,
    );
}

export function numberWithCommas(x: number, commas = '.') {
  try {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, commas);
  } catch (error) {
    console.log({ error });
    return x.toString();
  }
}

export function animateValue(endVal: number, duration: number) {
  let startTimestamp: any = null;
  const step = (timestamp: any) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
