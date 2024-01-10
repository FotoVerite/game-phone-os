import { EFFECT_TYPE } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  BubbleItemType,
  isDigestedBubble,
} from "@/src/phoneApplications/Messages/hooks/useConversation/digestion/types";
import { useSnapshotContext } from "@/src/snapShot/context";
import { SNAPSHOT_TYPES } from "@/src/snapShot/context/type";
import { useEffect } from "react";

import { ExchangeListItemType } from "../types";

export const useEffectsResolver = (
  props: ExchangeListItemType,
  resolved: boolean
) => {
  const setTakeSnapShot = useSnapshotContext().setTakeSnapShot;

  useEffect(() => {
    if (resolved && isDigestedBubble(props) && props.contentDelay) {
      if (props.effect?.type === EFFECT_TYPE.BACKGROUND_SNAPSHOT) {
        setTakeSnapShot({
          type: SNAPSHOT_TYPES.SILENT,
          filename: props.effect.data.filename,
        });
      }
    }
  }, [setTakeSnapShot, props, resolved]);
};
