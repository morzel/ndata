import 'assets/css/scale-diagram.css';

import uuid from 'uuid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setEntity,
  setSelectedEntityId,
} from 'pages/job-detail/job-detail-slice';
import ActionList from 'components/actions/action-list';
import DesignDroppable, { ITarget } from './design-droppable';
import DesignSectionTabs from './design-section-tabs';
import { RootState } from '../../../rootReducer';

interface Props {}

const DesignSection: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { entities, selectedEntityId } = useSelector(
    (state: RootState) => state.jobDetail
  );

  const handleDropped = (target: ITarget) => {
    dispatch(
      setEntity({
        id: uuid(),
        type: target.data.type,
      })
    );
  };

  const handleCardSelect = (id: string) => dispatch(setSelectedEntityId(id));

  return (
    <div className="flow-section">
      <DesignSectionTabs />
      <div className="nd-diagram-flow max-three-nodes-cover">
        <DesignDroppable onDropped={handleDropped}>
          <div className="info-block block-blue active first-child">
            <div className="icon-block">
              <svg version="1.1" x="0px" y="0px"
                   viewBox="0 0 512 512" width="36px" height="36px">
                <g>
                  <path
                    d="M507.353,245.245l-83.692-78.769c-4.289-4.039-10.57-5.141-15.98-2.803c-5.409,2.337-8.911,7.665-8.911,13.558v34.462    h-98.462v-98.462h34.462c5.892,0,11.221-3.502,13.558-8.911c2.337-5.409,1.236-11.69-2.803-15.98L266.755,4.647    C263.964,1.682,260.072,0,256,0s-7.964,1.682-10.755,4.647L166.476,88.34c-4.039,4.29-5.14,10.571-2.803,15.98    c2.337,5.409,7.665,8.911,13.558,8.911h34.462v98.462h-98.462v-34.462c0-5.892-3.502-11.221-8.911-13.558    c-5.41-2.337-11.69-1.236-15.98,2.803L4.647,245.245C1.682,248.036,0,251.928,0,256c0,4.072,1.682,7.964,4.647,10.755    l83.692,78.769c4.29,4.039,10.57,5.141,15.98,2.803c5.409-2.337,8.911-7.665,8.911-13.558v-34.462h98.462v98.462h-34.462    c-5.892,0-11.221,3.502-13.558,8.911c-2.337,5.409-1.236,11.69,2.803,15.98l78.769,83.692c2.79,2.966,6.683,4.647,10.755,4.647    c4.072,0,7.964-1.682,10.755-4.647l78.769-83.692c4.039-4.29,5.14-10.571,2.803-15.98c-2.337-5.409-7.665-8.911-13.558-8.911    h-34.462v-98.462h98.462v34.462c0,5.892,3.502,11.221,8.911,13.558c5.41,2.337,11.691,1.236,15.98-2.803l83.692-78.769    c2.966-2.79,4.647-6.683,4.647-10.755S510.318,248.036,507.353,245.245z"/>
                </g>
              </svg>
            </div>
            <div className="header-block">
              <span className="title">
                Drag the Source from<br/> widget tray to start the process
              </span>
              <span className="secondary-title"/>
            </div>
          </div>
          {/* TODO move above snippet to ActionList*/}
          <ActionList
            data={entities}
            selectedEntityId={selectedEntityId}
            onSelect={handleCardSelect}
          />
        </DesignDroppable>
      </div>
    </div>
  );
};

export default DesignSection;
