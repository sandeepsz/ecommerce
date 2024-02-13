import AspectRatio from "@/ui/aspect-ratio";
import Container from "@/ui/container";
import Heading from "@/ui/headings";
import SizedBox from "@/ui/sized-box";
import Text from "@/ui/text";
import { VideoPlayer } from "@/ui/video-player";

import useBreakpoints from "@/utils/useBreakpoints";

import { Title } from "./styles";
import type { VideoPropT, CommonFeaturePropsT } from "../types";

export type FeatureVariant1Props = CommonFeaturePropsT & {
  video: VideoPropT;
};

export const FeatureVariant1 = ({
  tagline,
  title,
  subtitle,
  video,
}: FeatureVariant1Props) => {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Title>
        {tagline && (
          <>
            <Text size={md ? "16" : "12"} semibold>
              {tagline}
            </Text>
            <SizedBox height={4} />
          </>
        )}
        <Heading as={md ? "h3" : "h5"} medium>
          {title}
        </Heading>
        <SizedBox height={{ base: 8, md: 16 }} />
        <Text
          size={md ? "18" : "14"}
          style={{ maxWidth: 540, margin: "0 auto" }}
        >
          {subtitle}
        </Text>
      </Title>
      <SizedBox height={md ? 32 : 16} />
      <AspectRatio
        ratio={md ? 1336 / 668 : 343 / 375}
        style={{
          borderRadius: 8,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <VideoPlayer src={video.src} thumbnail={{ ...video.thumbnail }} />
      </AspectRatio>
    </Container>
  );
};
